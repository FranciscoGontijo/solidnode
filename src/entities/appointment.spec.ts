import { test, expect } from 'vitest';
import { Appointment, AppointmentProps } from './appointment';

test('create an appointment', () => {
    const props: AppointmentProps = {
        customer: 'John Doe',
        startsAt: new Date(),
        endsAt: new Date()
    }
    const appointment = new Appointment(props)

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toBe('John Doe');
});

test('cannot create an appointment with end date before start date', () => {
    const startsAt = new Date();
    const endsAt = new Date();
    
    endsAt.setDate(endsAt.getDate() - 1);

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })}).toThrow();
});

