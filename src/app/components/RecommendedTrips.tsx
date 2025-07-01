import { Trip } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import TripItem from "@/components/TripItem";

const fetchTrips = async () => {
  const trips = await prisma.trip.findMany({
    where: {
      recommended: true,
    },
  });
  return trips;
};
const RecommendedTrips = async () => {
  const data = await fetchTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-4 text-center mb-4">
        <div className="w-full h-[1px] bg-cinza-claro"></div>
        <h2 className="w-full text-cinza font-medium text-base">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-cinza-claro"></div>
      </div>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {data.map((trip: Trip) => (
            <TripItem
              key={trip.id}
              trip={trip}
              
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default RecommendedTrips;
