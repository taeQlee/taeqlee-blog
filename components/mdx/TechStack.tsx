import {
  siArduino,
  siDocker,
  siEspressif,
  siFastapi,
  siHivemq,
  siJavascript,
  siJsonwebtokens,
  siMqtt,
  siOpencv,
  siPython,
  siRailway,
  siRaspberrypi,
  siReact,
  siSupabase,
} from "simple-icons/icons";

type SimpleIcon = {
  title: string;
  path: string;
  hex: string;
};

const techIcons: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  Python: siPython,
  React: siReact,
  FastAPI: siFastapi,
  OpenCV: siOpencv,
  Supabase: siSupabase,
  MQTT: siMqtt,
  HiveMQ: siHivemq,
  JWT: siJsonwebtokens,
  Docker: siDocker,
  Railway: siRailway,
  "Raspberry Pi": siRaspberrypi,
  Arduino: siArduino,
  ESP32: siEspressif,
};

type TechBadgeProps = {
  name: string;
};

function TechBadge({ name }: TechBadgeProps) {
  const icon = techIcons[name];

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
      {icon && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0"
          fill={`#${icon.hex}`}
          aria-label={icon.title}
        >
          <path d={icon.path} />
        </svg>
      )}

      <span>{name}</span>
    </div>
  );
}

type TechSectionProps = {
  title: string;
  technologies: string[];
};

function TechSection({ title, technologies }: TechSectionProps) {
  if (technologies.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <h4 className="min-w-[220px] text-base font-semibold text-zinc-400">
        {title}
      </h4>

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <TechBadge key={technology} name={technology} />
        ))}
      </div>
    </div>
  );
}

type TechStackProps = {
  languages?: string[];
  frameworks?: string[];
  database?: string[];
  messaging?: string[];
  infrastructure?: string[];
  hardware?: string[];
};

export default function TechStack({
  languages = [],
  frameworks = [],
  database = [],
  messaging = [],
  infrastructure = [],
  hardware = [],
}: TechStackProps) {
  return (
    <div className="my-8 space-y-6">
      <TechSection title="Languages" technologies={languages} />

      <TechSection title="Frameworks & Libraries" technologies={frameworks} />

      <TechSection title="Database & Storage" technologies={database} />

      <TechSection
        title="Messaging & Authentication"
        technologies={messaging}
      />

      <TechSection
        title="Infrastructure & Deployment"
        technologies={infrastructure}
      />

      <TechSection title="Hardware & IoT" technologies={hardware} />
    </div>
  );
}
