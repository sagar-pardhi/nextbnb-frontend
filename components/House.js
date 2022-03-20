import Link from "next/link";

export default function House({ house }) {
  return (
    <Link href="/houses/[id]" as={`/houses/${house.id}`}>
      <a>
        <img src={house.picture} width="100%" alt="House picture" />
        <p>
          {house.type} - {house.town}
        </p>
        <p>{house.title}</p>
      </a>
    </Link>
  );
}
