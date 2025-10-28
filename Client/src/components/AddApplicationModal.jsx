/**
 * AddApplicationModal component
 * 
 * functions:
 * - pops up the new window, contains new job form in it
 * - support input fields of new job
 * - click cancle will clean the form and close the window
 * - click add will clean the form and submit form
 * 
 * props:
 * @param {boolean} open - true will show form, false will close form
 * @param {function} onClose - callback function of close form
 * @param {function} onSubmit - callback function of submit form
 * 
 * states:
 * @State {object} form - store form input
 */

import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, Button} from "@mui/material"

function AddApplicationModal({open, onClose, onSubmit}) {
    const [form, setForm] = useState({
        job_type: "",
        position_title: "",
        company: "",
        link: "",
        location:"",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    
    console.log(form);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm({
            job_type: "",
            position_title: "",
            company: "",
            link: "",
            location:"",
        });

        onClose();
    };

    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="mt-4">Add Application</DialogTitle>
            <div className="h-4" />
            <DialogContent className="mt-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8" id="newJob">
                    <TextField name="position_title" label="Position Title"value={form.position_title} onChange={handleChange}/>
                    <TextField name="company" label="Company" value={form.company} onChange={handleChange}/>
                    <TextField name="link" label="Link" value={form.link} onChange={handleChange} className="col-span-2"/>
                    <TextField name="location" label="Location" value={form.location} onChange={handleChange}/>
                    <FormControl>
                        <InputLabel id="jobtype">Job Type</InputLabel>
                        <Select id="jobtype" name="job_type" label="Job Type" value={form.job_type} onChange={handleChange} className="col-span-1">
                            <MenuItem value="full_time">Full-time</MenuItem>
                            <MenuItem value="part_time">Part-time</MenuItem>
                            <MenuItem value="contract">Contract</MenuItem>
                        </Select>
                    </FormControl>
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit" form="newJob">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddApplicationModal;