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
    SelectInput, ReferenceField
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
                <ReferenceField source="id" reference="users" label="users">
                    <TextField source="username" />
                </ReferenceField>
                <TextField source="date.start"/>
                <TextField source="date.end"/>
                <TextField source="use_count"/>
                <EditButton/>
                <DeleteButton/>
                <ShowButton/>
            </Datagrid>
        </List>
    );
};

export default PostList;