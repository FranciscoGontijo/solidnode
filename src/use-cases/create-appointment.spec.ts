import { it, test, expect, describe } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";

describe('should create a new appointment', () => {
    it('should create a new appointment', () => {
        const createAppointment = new CreateAppointment();

        const startsAt = new Date();
        const endsAt = new Date();

        startsAt.setDate(startsAt.getDate() + 1);
        endsAt.setDate(endsAt.getDate() + 2);

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    })
})