import Status from "../models/status";

class StatusController {

    async listar(req, res) {
  
        const status = await Status.findAll();

        return res.json(
            status
        );
    }
}

export default new StatusController();