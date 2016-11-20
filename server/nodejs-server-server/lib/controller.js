class Controller {
    constructor(facade) {
        this.Facade = facade;
    }

    find(req, res, next) {
        return this.Facade.find(req.swagger.params.body.value)
            .then(collection => res.status(200).json(collection))
            .catch(err => next(err));
    }


    findOne(req, res, next) {
        return this.Facade.findOne(req.swagger.params.body.value)
            .then(doc => res.status(200).json(doc))
            .catch(err => next(err));
    }

    findById(req, res, next) {
        return this.Facade.findById(req.swagger.params.id.value)
            .then(doc => {
                if (!doc) { return res.status(404).end(); }
                return res.status(200).json(doc);
            })
            .catch(err => next(err));
    }

    create(req, res, next) {
        this.Facade.create(req.swagger.params.body.value)
            .then(doc => res.status(201).json(doc))
            .catch(err => next(err));
    }

    update(req, res, next) {
        const conditions = { _id: req.swagger.params.id.value };

        this.Facade.update(conditions, req.swagger.params.body.value)
            .then(doc => {
                if (!doc) { return res.status(404).end(); }
                return res.status(200).json(doc);
            })
            .catch(err => next(err));
    }

    remove(req, res, next) {
        this.Facade.remove(req.swagger.params.id.value)
            .then(doc => {
                if (!doc) { return res.status(404).end(); }
                return res.status(204).end();
            })
            .catch(err => next(err));
    }
}

module.exports = Controller;