import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit  = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullwidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}  />
             <TextField name="title" variant="outlined" label="Title" fullwidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}  />
             <TextField name="message" variant="outlined" label="Message" fullwidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}  />
             <TextField name="tags" variant="outlined" label="tags" fullwidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}  />
            <div className={classes.fileInput}>
                <FileBase64 type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}>
                   
                </FileBase64>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullwidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullwidth>Clear</Button>
                
            </div>
            </form>
        </Paper>
    );
}

export default Form;