
export class flight
{
  constructor
  (
    public flightNumber: number,
    public carrier: string,
    public origin: string,
    public departure: string,
    public destination: string,
    public arrival: string,
    public aircraft: string,
    public distance: number,
    public travelTime: string,
    public status: string
    ) {}
}
