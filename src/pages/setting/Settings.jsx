import AdminLayout from "../../components/layout/AdminLayout";
import Card from "../../components/ui/card";
import Button from "../../components/ui/Button";
import ToggleSwitch from "../../components/forms/ToggleSwitch";
import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoPublish: false,
    darkMode: false,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-2">Manage your admin preferences</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Notifications</h3>
          <div className="space-y-4">
            <ToggleSwitch
              label="Email Notifications"
              checked={settings.emailNotifications}
              onChange={() => handleToggle("emailNotifications")}
            />
            <ToggleSwitch
              label="Auto Publish"
              checked={settings.autoPublish}
              onChange={() => handleToggle("autoPublish")}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Appearance</h3>
          <div className="space-y-4">
            <ToggleSwitch
              label="Dark Mode"
              checked={settings.darkMode}
              onChange={() => handleToggle("darkMode")}
            />
          </div>
        </Card>
      </div>

      <Card className="p-6 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Account</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Admin Email</label>
            <input
              type="email"
              defaultValue="admin@techpolarity.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-primary"
              disabled
            />
          </div>
        </div>
        <Button className="mt-6">Save Settings</Button>
      </Card>
    </AdminLayout>
  );
};

export default Settings;
