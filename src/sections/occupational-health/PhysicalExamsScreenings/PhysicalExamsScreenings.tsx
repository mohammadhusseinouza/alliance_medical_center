import { useTranslation } from "react-i18next";
import { EyeIcon, FlaskIcon, LungsIcon, RotateIcon, ShieldCheckIcon, UserIcon } from "../../../components/icons";
import { PHYSICAL_EXAM_ITEMS } from "./physicalExamsScreenings.data";
import type { PhysicalExamIconName } from "./physicalExamsScreenings.types";

function ExamIcon({ icon }: { icon: PhysicalExamIconName }) {
  const props = { size: 21, strokeWidth: 1.8 };
  switch (icon) {
    case "user":
      return <UserIcon {...props} />;
    case "eye":
      return <EyeIcon {...props} />;
    case "rotate":
      return <RotateIcon {...props} />;
    case "lungs":
      return <LungsIcon {...props} />;
    case "shield-check":
      return <ShieldCheckIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} />;
  }
}

export function PhysicalExamsScreenings() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 py-20 mw-650:px-[18px] mw-650:py-[50px]">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="mx-auto max-w-[640px] text-center text-[clamp(30px,3vw,40px)] font-bold leading-[1.14] tracking-[-1px] text-text-primary">
          {t("occupationalHealth.exams.heading")}
        </h2>

        <p className="mx-auto mt-[14px] max-w-[680px] text-center text-base leading-[1.65] text-text-secondary [text-wrap:pretty]">
          {t("occupationalHealth.exams.description")}
        </p>

        <ul className="mt-11 grid grid-cols-3 gap-[22px] mw-1100:grid-cols-2 mw-880:grid-cols-1">
          {PHYSICAL_EXAM_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`rounded-2xl border bg-white p-6 [transition:transform_200ms_ease,box-shadow_200ms_ease] hover:-translate-y-[2px] hover:shadow-card-hover motion-reduce:duration-[0.01ms] ${
                item.accent === "success" ? "border-success/30" : "border-border-subtle"
              }`}
            >
              <div
                className={`flex h-[46px] w-[46px] items-center justify-center rounded-[12px] ${
                  item.accent === "success" ? "bg-success-bg text-success-text" : "bg-badge-bg text-badge-text"
                }`}
              >
                <ExamIcon icon={item.icon} />
              </div>

              <h3 className="mt-[14px] text-[17px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.exams.items.${item.translationKey}.title`)}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.55] text-text-secondary">
                {t(`occupationalHealth.exams.items.${item.translationKey}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
