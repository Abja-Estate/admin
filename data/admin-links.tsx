import {
  AccountSettings,
  ConfigurationIcon,
  DashboardIcon,
  HouseIcon,
  NotificationOutlineIcon,
  PaymentIcon,
  PreferenceIcon,
  ReportIcon,
  RequestIcon,
  SVGProps,
  SecurityIcon,
  SettingIcon,
  UserActivityIcon,
} from "@/components/svgs";

interface AdminSideNavigationLink {
  href: string;
  linkText: string;
  leading: React.FC<SVGProps>;
}

export const adminSideNavigationLinksData: Array<AdminSideNavigationLink> = [
  {
    href: "/dashboard",
    linkText: "Dashboard",
    leading: DashboardIcon,
  },
  {
    href: "/dashboard/landlord",
    linkText: "Landlord",
    leading: HouseIcon,
  },
  {
    href: "/dashboard/request",
    linkText: "Request",
    leading: RequestIcon,
  },
  {
    href: "/dashboard/payment",
    linkText: "Payments",
    leading: PaymentIcon,
  },
  {
    href: "/dashboard/report",
    linkText: "Reports",
    leading: ReportIcon,
  },
  {
    href: "/dashboard/settings",
    linkText: "Settings",
    leading: SettingIcon,
  },
];

interface SettingsNavigationLink {
  href: string;
  linkText: string;
  leading: React.FC<SVGProps>;
}

export const settingsNavigationLinksData: Array<SettingsNavigationLink> = [
  {
    href: "/dashboard/settings",
    linkText: "My Account",
    leading: AccountSettings,
  },
  {
    href: "/dashboard/settings/preferences",
    linkText: "Preferences",
    leading: PreferenceIcon,
  },
  {
    href: "/dashboard/settings/notification",
    linkText: "Notifications",
    leading: NotificationOutlineIcon,
  },
  {
    href: "/dashboard/settings/user-activity",
    linkText: "User Activity",
    leading: UserActivityIcon,
  },
  {
    href: "/dashboard/settings/configuration",
    linkText: "Configuration",
    leading: ConfigurationIcon,
  },
  {
    href: "/dashboard/settings/security",
    linkText: "Security",
    leading: SecurityIcon,
  },
];
