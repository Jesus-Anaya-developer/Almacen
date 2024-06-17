export class Telefonos {

  constructor(
    public _id: string,
    public Fabricante: string,
    public TipoTrabajo: string,
    public FechaEntrada: Date,
    public FechaSalida: Date,
    public IMEI: string,
    public NuevoIMEI: string,
    public Modelo: string,
    public Sintoma: string
  ) { }
}
