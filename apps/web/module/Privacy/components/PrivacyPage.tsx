"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Button } from "../../../common/components/ui/Button";

interface SettingProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (checked: boolean) => void; // Corrected type
}

const PrivacySetting = (props: SettingProps) => {
  const { title, description, enabled, onToggle } = props; // Destructure onToggle

  // Handle toggle change
  const handleToggleChange = () => {
    onToggle(!enabled); // Toggle the state and pass it to the parent component
  };
  return (
    <div className="card flex border-2 w-3/5 p-5 border-gray-200 mt-2 rounded ">
      <div className="flex flex-1 flex-col">
        <div className="font-semibold pb-2">{title}</div>
        <div>{description}</div>
      </div>
      <div className="flex ml-auto items-start">
        <span className="mr-2 font-medium">{enabled ? "On" : "Off"}</span>
        <Switch
          checked={enabled}
          onChange={handleToggleChange}
          className={`${
            enabled ? "bg-indigo-600" : "bg-gray-300"
          } relative inline-flex flex-shrink-0 h-6 w-11 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out `}
        >
          <span
            aria-hidden="true"
            className={`${
              enabled ? "translate-x-5" : "translate-x-0"
            } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
          >
            <span
              className={`${
                enabled
                  ? "opacity-0 ease-out duration-100"
                  : "opacity-100 ease-in duration-200"
              } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
              aria-hidden="true"
            >
              {/* Off */}
              <svg
                className="h-3 w-3 text-gray-400"
                fill="none"
                viewBox="0 0 12 12"
              >
                <path
                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={`${
                enabled
                  ? "opacity-100 ease-in duration-200"
                  : "opacity-0 ease-out duration-100"
              } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
              aria-hidden="true"
            >
              {/* On */}
              <svg
                className="h-3 w-3 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </Switch>
      </div>
    </div>
  );
};

const PrivacyPage = () => {
  // State for managing toggle switches

  const [settings, setSettings] = useState({
    personalizeAds: false,
    enhanceUserProfile: false,
    trainAIWithContent: false,
    generalUsageAndActivity: false,
    shareDesignUsage: false,
  });

  // Function to handle toggle switch changes

  const handleToggleChange = (key: keyof typeof settings) => {
    setSettings((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="w-full pt-4">
      <div className="text-lg font-semibold">Privacy Settings</div>

      <div className="text-lg font-semibold mt-4">Data Sharing</div>
      {/* Privacy settings sections */}
      <PrivacySetting
        title="Personalize Canva ads on other websites"
        description="Canva may use my profile and analytics data to show me personalized ads about Canva when I am browsing on other apps and websites."
        enabled={settings.personalizeAds}
        onToggle={() => handleToggleChange("personalizeAds")}
      />

      <div className="text-lg font-semibold mt-4 pb-2">
        You are in control of your data
      </div>
      <div>
        We believe you should have control over your data, and we take our
        responsibility to safeguard it seriously.{""}
        <div>
          <Button variant="link" className="p-0 h-auto">
            Learn more.
          </Button>
        </div>
      </div>
      <PrivacySetting
        title="Enhance Your User Profile with information from 3rd party providers"
        description="Allow Canva to enrich my profile by collecting additional information about me from third-party providers so Canva can offer me a more personalized experience and tailored recommendations."
        enabled={settings.enhanceUserProfile}
        onToggle={() => handleToggleChange("enhanceUserProfile")}
      />
      <PrivacySetting
        title="Your content on Canva is not used to train AI unless you turn this on"
        description="Unless you turn this on, Canva and our trusted third-party partners will not train AI using your content, which includes the text in your designs and your uploads (such as photos, videos, audio, and files). Even the prompts you use for products like Magic Write are considered part of your content and are not used to train AI."
        enabled={settings.trainAIWithContent}
        onToggle={() => handleToggleChange("trainAIWithContent")}
      />
      <PrivacySetting
        title="Your general usage and activity helps Canva build better AI features unless you turn this off"
        description="Your general usage and activity on Canva can contribute to the ongoing development of better AI features. Unless you turn this off, Canva and our trusted third-party partners may use general information with strict controls and policies in place."
        enabled={settings.generalUsageAndActivity}
        onToggle={() => handleToggleChange("generalUsageAndActivity")}
      />
      <PrivacySetting
        title="Share my design usage with collaborators"
        description="Share my usage and activity data with the editors or owners of the designs that I interact with via Design Insights."
        enabled={settings.shareDesignUsage}
        onToggle={() => handleToggleChange("shareDesignUsage")}
      />
      <div>
        Visit the{" "}
        <Button variant="link" className="p-0 text-base">
          {" "}
          Messaging preferences
        </Button>{" "}
        page to review and update your marketing messaging settings.
      </div>
    </div>
  );
};
export default PrivacyPage;
