import Link from "next/link";


async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    { cache: "no-store" }
  );

  const data = await response.json();
  speakerJson = data;
  return data;
}

export default async function Page() {
  const data = await fetchSessions();
  return (
    <>
      <h1>Welcome to Speaker Sessions page</h1>
      <h2>
        <Link href={"/conference"}>Back to the Conference Page</Link>
      </h2>
      {data.sessions.map(
        ({ id, title, description, room, day, track, speakers }) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            {speakers &&
              speakers.map(({ name }) => (
                // eslint-disable-next-line react/jsx-key
                <h3 className={styles.titleText}>Speaker: {name}</h3>
              ))}
            <h5 className={styles.descText}>{description}</h5>
            <h4 className={styles.infoText}>Room: {room}</h4>
            <h4 className={styles.infoText}>Day: {day}</h4>
            <h4 className={styles.infoText}>Track: {track}</h4>
          </div>
        )
      )}
    </>
  );
}
