import React, {useEffect, useState} from 'react';
import 'feather-icons';

const CreateCollection: React.FC = () => {

    useEffect(() => {
        feather.replace();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        url: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="col-12 mt-4">
            <div className="card border-0 rounded shadow ">
                <div className="card-body">

                    <form onSubmit={handleSubmit}>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="user" className="fea icon-sm icons"/>
                                        <input
                                            name="name"
                                            type="text"
                                            className="form-control ps-5"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Asset Url</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="globe" className="fea icon-sm icons"/>
                                        <input
                                            name="url"
                                            type="url"
                                            className="form-control ps-5"
                                            placeholder="Asset Url"
                                            value={formData.url}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-end">
                                <input type="submit" name="send" className="btn btn-primary" value="Create"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default CreateCollection;
