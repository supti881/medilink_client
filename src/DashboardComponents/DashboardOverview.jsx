import { Bell, Settings } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        
        <input
          type="text"
          placeholder="Search patients, records, or labs..."
          className="w-full md:w-1/3 px-4 py-2 rounded-full bg-white shadow-sm outline-none"
        />

        <div className="flex items-center gap-4 self-end md:self-auto">
          <Bell className="text-gray-600" />
          <Settings className="text-gray-600" />
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Welcome */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-green-900">
            Welcome back, Dr. Smith
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            You have 8 consultations scheduled for today.
          </p>
        </div>

        <button className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm w-fit">
          Available for Emergency
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-sm">PATIENTS TODAY</p>
          <h2 className="text-3xl font-bold">12</h2>
          <p className="text-green-500 text-sm mt-2">
            +4 more than yesterday
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-800">
          <p className="text-gray-500 text-sm">HOURS LOGGED</p>
          <h2 className="text-3xl font-bold">
            32.5 <span className="text-sm">/wk</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            75% of your weekly goal reached
          </p>
        </div>

        <div className="bg-red-100 p-6 rounded-xl shadow">
          <p className="text-red-500 text-sm">URGENT NOTIFICATIONS</p>
          <h2 className="text-3xl font-bold text-red-600">03</h2>
          <p className="text-red-500 text-sm mt-2">
            View critical alerts →
          </p>
        </div>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Patient Queue */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-lg">Patient Queue</h2>
            <button className="text-green-700 text-sm">
              View Full List →
            </button>
          </div>

          <div className="space-y-4">

            {/* Patient */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold">Sarah Jenkins</p>
                  <p className="text-gray-500 text-sm">
                    Post-op Consultation • 09:30 AM
                  </p>
                </div>
              </div>

              <button className="bg-green-900 text-white px-4 py-2 rounded-lg w-fit">
                Start Consultation
              </button>

            </div>

            {/* Patient */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold">Robert Chen</p>
                  <p className="text-gray-500 text-sm">
                    Chronic Hypertension • 10:15 AM
                  </p>
                </div>
              </div>

              <button className="bg-gray-200 px-4 py-2 rounded-lg w-fit">
                Prepare File
              </button>

            </div>

          </div>

        </div>

        {/* Schedule */}
        <div className="bg-green-900 text-white p-6 rounded-xl shadow">

          <p className="text-green-200 text-sm">TUESDAY</p>
          <h2 className="text-2xl font-bold mb-4">October 24</h2>

          <div className="space-y-4 text-sm">

            <div>
              <p className="opacity-70">09:00</p>
              <p>Morning Rounds</p>
              <p className="opacity-70 text-xs">
                Sanctuary West Wing
              </p>
            </div>

            <div>
              <p className="opacity-70">10:15</p>
              <p>Telehealth Block</p>
              <p className="opacity-70 text-xs">
                4 Appointments Scheduled
              </p>
            </div>

            <div>
              <p className="opacity-70">12:30</p>
              <p>Staff Lunch</p>
            </div>

          </div>

          <button className="mt-6 w-full bg-green-200 text-green-900 py-2 rounded-lg">
            Adjust Availability
          </button>

        </div>

      </div>

    </div>
  );
}