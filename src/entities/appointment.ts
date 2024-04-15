export interface AppointmentProps {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

export class Appointment {
    private props: AppointmentProps;

    constructor(props: AppointmentProps) {
        this.props = props;

        if (Number(this.props.startsAt) > Number(this.props.endsAt)) {
            throw new Error;
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