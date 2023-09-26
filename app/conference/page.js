import Image from "next/image";
import ConferencePic from "../../images/media-image-1.jpg";
import styles from "./conference.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={ConferencePic}
          alt="Conference Pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to Globomantics Conference</h1>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/speakers">
          View Speakers
        </Link>
      </h2>
      <h2 className={styles.bgText}>
        <Link className={styles.bgLinks} href="/conference/sessions">
          View Sessions
        </Link>
      </h2>
    </>
  );
}
