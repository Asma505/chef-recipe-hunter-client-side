import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const MyDoc = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1            
        },
        title: {
            textAlign: 'center',
            marginBottom: 28
        },
        body: {
            marginBottom: 10
        }
    });
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>Questions and Answers</Text>                    
                    <Text style={styles.body}>Question: Tell us the differences between uncontrolled and controlled components.</Text>
                    <Text style={styles.body}>Answer: Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</Text>
                    <Text style={styles.body}>Question: How to validate React props using PropTypes?</Text>
                    <Text style={styles.body}>Answer: PropTypes is React's internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.</Text>
                    <Text style={styles.body}>Question: Tell us the difference between nodejs and express js.</Text>
                    <Text style={styles.body}>Answer: NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</Text>
                    <Text style={styles.body}>Question: What is a custom hook, and why will you create a custom hook?</Text>
                    <Text style={styles.body}>Answer: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. I will create a custom hook because, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</Text>
                </View>              
            </Page>
        </Document>
    );
};

export default MyDoc;