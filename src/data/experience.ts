import bambooProptechLogo from "../assets/images/experience/bamboo-proptech-logo.png";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBolt,
  faBrain,
  faPlug,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export interface Role {
  period: string;
  title: string;
  organisation: string;
  logo?: string;
  location: string;
  summary: string;
  metrics: { value: string; label: string }[];
  highlights: { icon: IconDefinition; title: string; body: string }[];
}

// Most recent first.
const experience: Role[] = [
  {
    period: "Jul 2025 – Present",
    title: "Software Engineer",
    organisation: "Bamboo Proptech",
    logo: bambooProptechLogo,
    location: "London (Remote)",
    summary:
      "Real estate technology that lets agents run their own online auction services.",
    metrics: [
      {
        value: "100%",
        label:
          "of AWS infrastructure migrated to Terraform, with fully auditable deployments",
      },
      {
        value: "60%",
        label:
          "lower AWS operating costs from rightsizing workloads and removing underused resources",
      },
    ],
    highlights: [
      {
        icon: faBrain,
        title: "Machine learning pricing",
        body: "Built a SageMaker model for data-driven auction pricing to improve sale success rates.",
      },
      {
        icon: faBolt,
        title: "Real-time data",
        body: "Streamed MongoDB change events through Kinesis into an event-driven analytics architecture.",
      },
      {
        icon: faPlug,
        title: "CRM integrations",
        body: "Integrated external CRM APIs to streamline property data and expand available inventory.",
      },
      {
        icon: faUserGroup,
        title: "Collaboration",
        body: "Mentored junior developers and work with customer success to guide product-led growth.",
      },
    ],
  },
];

export default experience;
