import { Trip } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

interface TripItemProps {
  trip: Trip;
}

const TripItem = (props: TripItemProps) => {
  return (
    <Link href={`/trips/${props.trip.id}`}>
      <div className="flex flex-col p-4 gap-1 rounded-2xl justify-center hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-[320px] w-[320px]">
          <Image
            src={props.trip.coverImage}
            alt={props.trip.name}
            fill
            className="rounded-2xl mb-2 object-cover"
            
          />
        </div>
      
      <div className="flex items-center gap-1" >
        <ReactCountryFlag countryCode={props.trip.countryCode} svg />
        <p>{props.trip.location}</p>
      </div>
      <h3 className="text-lg font-semibold">{props.trip.name}</h3>
      <p className="text-cinza">{props.trip.location}</p>

      

      <p className="text-cinza">
        {format(new Date(props.trip.startDate), "dd 'de' MMMM 'de' yyyy", {
          locale: ptBR,
        })}
      </p>
      <p className="text-cinza">
        <span className="text-roxo font-semibold">
          R${props.trip.pricePerDay.toString()}
        </span>{" "}
        por noite
      </p>

    </div>
    </Link>
  );
};

export default TripItem;
