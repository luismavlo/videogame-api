import express from 'express';

interface Options {
  port: number;
}


export class Server {

  public readonly app = express();
  private readonly port: number;

  constructor(options: Options) {
    this.port = options.port;
  }

  async start() {

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));


    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    })

  }

}