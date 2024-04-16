import { test, expect } from 'vitest';
import { Appointment, AppointmentProps } from './appointment';
import { getFutureDate } from '../tests/util/get-future-date';

test('create an appointment', () => {
    const startsAt = getFutureDate('2024-04-16');
    const endsAt = getFutureDate('2024-04-17');

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt
    })

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toBe('John Doe');
});

test('cannot create an appointment with end date before start date', () => {
    const startsAt = getFutureDate('2024-04-16');
    const endsAt = getFutureDate('2024-04-15');

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })}).toThrow();
});

test('cannot create an appointment with start date before now', () => {
    const startsAt = new Date();
    const endsAt = new Date();
    
    startsAt.setDate(startsAt.getDate() - 1);

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        })}).toThrow();
});

