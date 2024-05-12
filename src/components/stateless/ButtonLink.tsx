import cx from "classnames";
import Link from "next/link";

interface IButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({ href, children, className }: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={cx("py-3 px-16 rounded-md bg-background text-font", className)}
    >
      {children}
    </Link>
  );
};
