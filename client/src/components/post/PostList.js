import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    ShowButton,
    ReferenceInput,
    TextInput,
    SelectInput
} from "react-admin";

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn/>,
    <ReferenceInput source="id" label="User" reference="users">
        <SelectInput optionText="username"/>
    </ReferenceInput>
];

const PostList = (props) => {
    return (
        <List {...props} filters={postFilters}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="promo"/>
                <TextField source="date.start"/>
                <TextField source="date.end"/>
                <TextField source="use_count"/>
                <TextField source="creator"/>
                <EditButton/>
                <DeleteButton/>
                <ShowButton/>
            </Datagrid>
        </List>
    );
};

export default PostList;