import { it, test, expect, describe } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";
import { getFutureDate } from "../tests/util/get-future-date";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";

describe('should create a new appointment', () => {
    it('should be able to create a new appointment', () => {
        const appointmentsRepository = new InMemoryAppointmentsRepository();
        const createAppointment = new CreateAppointment(appointmentsRepository);

        const startsAt = getFutureDate('2024-04-16');
        const endsAt = getFutureDate('2024-04-17');

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    });

    it('should not be able to create an overlapping appointment', async () => {
        const appointmentsRepository = new InMemoryAppointmentsRepository();
        const createAppointment = new CreateAppointment(appointmentsRepository);

        const startsAt = getFutureDate('2024-04-16');
        const endsAt = getFutureDate('2024-04-22');
        
        await createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        });


        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2024-04-19'),
            endsAt: getFutureDate('2024-04-20')
        })).rejects.toBeInstanceOf(Error);

        
        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2024-04-14'),
            endsAt: getFutureDate('2024-04-20')
        })).rejects.toBeInstanceOf(Error);

        
        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2024-04-19'),
            endsAt: getFutureDate('2024-04-25')
        })).rejects.toBeInstanceOf(Error);
    })
});