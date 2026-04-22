import React, { useState } from "react";
import { Mail, Shield, UserX, UserCheck, Search, Filter } from "lucide-react";

const UserManagement = () => {
  // Sample State - In MERN, you'd fetch this from your API
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Jenkins",
      email: "sarah.j@outlook.com",
      role: "Patient",
      isBlocked: false,
    },
    {
      id: 2,
      name: "Robert Chen",
      email: "r.chen@medical.org",
      role: "Patient",
      isBlocked: false,
    },
    {
      id: 3,
      name: "Dr. Michael Ross",
      email: "m.ross@clinic.com",
      role: "Doctor",
      isBlocked: true,
    },
    {
      id: 4,
      name: "Emily Blunt",
      email: "e.blunt@clinic.com",
      role: "Admin",
      isBlocked: false,
    },
  ]);

  const toggleBlockStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isBlocked: !user.isBlocked } : user,
      ),
    );
    // Here you would typically make an axios.patch('/api/users/block/:id') call
  };

  return (
    <div className="p-8 bg-[#F8FAFB] min-h-screen font-sans text-slate-700">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#00402E]">User Directory</h1>
          <p className="text-sm text-slate-500">
            Manage system access and user permissions
          </p>
        </div>
        <button className="bg-[#00402E] hover:bg-[#002d20] text-white px-5 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2">
          <span>+ Add New User</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-6 flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00402E]/20 focus:border-[#00402E] transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50">
          <Filter className="w-4 h-4" /> Filter Role
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-500 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">User Details</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#F0F7F4]/30 transition-colors group"
              >
                {/* Name & Email */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00402E]/10 flex items-center justify-center text-[#00402E] font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {user.name}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {user.email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-slate-400" />
                    <span className="font-medium">{user.role}</span>
                  </div>
                </td>

                {/* Status Badge */}
                <td className="px-6 py-4">
                  {user.isBlocked ? (
                    <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100">
                      Blocked
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">
                      Active
                    </span>
                  )}
                </td>

                {/* Block Button */}
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => toggleBlockStatus(user.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      user.isBlocked
                        ? "bg-emerald-600 text-white hover:bg-emerald-700"
                        : "bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {user.isBlocked ? (
                      <>
                        <UserCheck className="w-4 h-4" /> Unblock
                      </>
                    ) : (
                      <>
                        <UserX className="w-4 h-4" /> Block User
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
