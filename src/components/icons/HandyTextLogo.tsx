import { useTranslation } from "react-i18next";

/** Dicta wordmark; keeps the existing import contract for every native surface. */
const HandyTextLogo = ({
  width = 140,
  height,
  className = "",
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`dicta-wordmark ${className}`}
      style={{ width, height }}
      aria-label={t("brand.name")}
    >
      <svg width="36" height="36" viewBox="0 0 1024 1024" aria-hidden="true">
        <rect x="24" y="24" width="976" height="976" rx="224" fill="#c4ed79" />
        <path
          d="M276 260H480C681 260 776 370 776 512S681 764 480 764H276V260Z"
          fill="#121510"
        />
        <path
          d="M420 404v216M512 358v308M604 428v168"
          stroke="#c4ed79"
          strokeWidth="48"
          strokeLinecap="round"
        />
      </svg>
      <span>{t("brand.wordmark")}</span>
    </div>
  );
};
export default HandyTextLogo;
