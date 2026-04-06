const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
    try {
        const record = await Record.create({
            ...req.body,
            createdBy: req.user.id
        });
        res.status(201).json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRecords = async (req, res) => {
    try {
        const records = await Record.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(record);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRecord = async (req, res) => {
    try {
        await Record.findByIdAndDelete(req.params.id);
        res.json({ message: "Record deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.filterRecords = async (req, res) => {
    try {
        const { type, category, startDate, endDate } = req.query;

        let filter = {};

        if (type) filter.type = type;
        if (category) filter.category = category;
        if (startDate && endDate) {
            filter.date = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        const records = await Record.find(filter);
        res.json(records);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRecords = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = 5;

        const records = await Record.find()
            .skip((page - 1) * limit)
            .limit(limit);

        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

