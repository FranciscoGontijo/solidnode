export interface AppointmentProps {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

export class Appointment {
    private props: AppointmentProps;

    constructor(props: AppointmentProps) {
        this.props = props;

        if (this.props.endsAt <= this.props.startsAt) {
            throw new Error('Invalid end date');
        };

        if (this.props.startsAt <= new Date()) {
            throw new Error('Invalid start date');
        };
    }

    get customer(): string {
        return this.props.customer;
    }

    get startsAt(): Date {
        return this.props.startsAt;
    }

    get endsAt(): Date {
        return this.props.endsAt;
    }
}