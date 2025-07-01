"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

const onSubmit = (data: any) => {
  // Handle form submission logic here
  console.log({ data });
};
const TripReservation = ({ trip }: TripReservationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TripReservationForm>();

  return (
    <div className="flex flex-col px-6">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data de início é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              className="w-full"
              placeholderText="Data de início"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
            />
          )}
        ></Controller>

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data de término é obrigatória",
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              className="w-full"
              placeholderText="Data de término"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
            />
          )}
        ></Controller>
        
      </div>
      <Input
        {...register("guests", {
          required: {
            value: true,
            message: "Número de hóspedes é obrigatório",
          },
        })}
        type="number"
        className="mt-4"
        placeholder={`Número de hóspedes (max: ${trip.maxGuest})`}
        onChange={() => {}}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-4">
        <p className="font-medium text-sm text-roxo-dark">Total:</p>
        <p className="font-medium text-sm text-roxo-dark">R$2500</p>
      </div>
      <div className="pb-10 border-b border-cinza w-full">
        <Button
          className="mt-4 w-full"
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
        >
          Reservar agora
        </Button>
      </div>
    </div>
  );
};

export default TripReservation;
