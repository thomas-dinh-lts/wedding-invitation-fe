export interface IRSVP {
  _id: string;
  name: string;
  phoneNumber: string;
  rsvpSelected: number;
  wish: string;
  dateCreated: string;
}

export interface IRSVPResponse {
  groomReception: IRSVP[];
  groomReceptionCount: number;
  brideReception: IRSVP[];
  brideReceptionCount: number;
  notAttending: IRSVP[];
  notAttendingCount: number;
}
