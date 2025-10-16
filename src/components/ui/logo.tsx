import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Link as I18nLink } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

type indexProps = {
  src?: string;
  href?: string;
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  desClassName?: string;
  removeText?: boolean;
};

export default function Logo({
  src = "/images/logo.png",
  className,
  imgClassName,
  titleClassName,
  desClassName,
  href = "/",
  removeText = false
}: indexProps) {
  const t = useTranslations("Header");
  return (
    <I18nLink
      href={href}
      aria-label="site-logo"
      className={cn("flex items-center gap-3.5", className)}
    >
      <ExportedImage
        className={cn(
          "h-auto w-16 max-w-full overflow-hidden sm:w-28",
          imgClassName
        )}
        src={src}
        width={128}
        height={94}
        placeholder="empty"
        priority
        alt="site-logo"
      />
      {!removeText && (
        <div>
          <h2
            className={cn(
              "text-lg font-bold text-gray-900 lg:text-xl",
              titleClassName
            )}
          >
            {t("siteName")}
          </h2>
          <p
            className={cn(
              "hidden text-xs text-gray-600 lg:block",
              desClassName
            )}
          >
            {t("siteDescription")}
          </p>
        </div>
      )}
    </I18nLink>
  );
}
