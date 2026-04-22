import React, { useEffect, useState } from "react";
import { MoreVertical, Video, MapPin } from "lucide-react";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = "user123"; // later replace with Firebase auth user

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);

        const res = await fetch(`http://localhost:5000/api/bookings/${userId}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch appointments");
        }

        setAppointments(data.bookings || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // LOADING STATE
  if (loading) {
    return <div className="p-8">Loading appointments...</div>;
  }

  // ERROR STATE
  if (error) {
    return <div className="p-8 text-red-500 font-medium">Error: {error}</div>;
  }

  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen">
      <h1 className="text-2xl font-bold text-[#00402E] mb-8">
        My Appointments
      </h1>

      {/* EMPTY STATE */}
      {appointments.length === 0 ? (
        <div className="text-center text-slate-500 mt-10">
          No appointments found.
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Doctor</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50 text-sm">
              {appointments.map((appt) => (
                <tr
                  key={appt._id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  {/* Doctor */}
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {appt.doctorName || "Unknown Doctor"}
                  </td>

                  {/* Date & Time */}
                  <td className="px-6 py-4">
                    <span className="block font-medium">{appt.date}</span>
                    <span className="text-xs text-slate-400">
                      {appt.timeSlot}
                    </span>
                  </td>

                  {/* Type */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      {appt.type === "Telehealth" ? (
                        <Video size={14} />
                      ) : (
                        <MapPin size={14} />
                      )}
                      {appt.type || "Telehealth"}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        appt.status === "Confirmed"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          : "bg-amber-50 text-amber-600 border border-amber-100"
                      }`}
                    >
                      {appt.status || "Pending"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-[#00402E]">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
