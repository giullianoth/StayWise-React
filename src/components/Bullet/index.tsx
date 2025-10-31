import styles from "./Bullet.module.css";

type Props = {
  message: string;
  type: "success" | "info" | "warning" | "error";
  className?: string;
  small?: boolean
};

const Bullet = ({ message, type, className, small }: Props) => {
  return (
    <p
      className={
        `${styles.bullet} ${styles[type]}`
        + (className ? ` ${className}` : "")
        + (small ? ` ${styles.small}` : "")
      }>
      {message}
    </p>
  );
};

export default Bullet;
