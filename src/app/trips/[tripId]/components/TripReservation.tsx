"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker
          className="w-full"
          placeholderText="Data de início"
          onChange={() => {}}
        />
        <DatePicker
          className="w-full"
          placeholderText="Data de término"
          onChange={() => {}}
        />
      </div>
      <Input
        className="mt-4"
        placeholder={`Número de hóspedes (max: ${trip.maxGuest})`}
        onChange={() => {}}
      />

      <div className="flex justify-between mt-4">
        <p className="font-medium text-sm text-roxo-dark">Total:</p>
        <p className="font-medium text-sm text-roxo-dark">R$2500</p>
      </div>
      <div className="pb-10 border-b border-cinza w-full">
        <Button className="mt-4 w-full">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;
