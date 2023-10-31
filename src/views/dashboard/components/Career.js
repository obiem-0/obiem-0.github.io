import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';
import { wrap } from 'lodash';

const items = [
    {
        id: "Nov, 2022",
        name: "Data Consultant",
        post: "Advised on data collection tools and cost-effective solutions for value creation; Assisted in drafting requirements for their website development team to improve data collection and reporting; Conducted in-depth analysis to identify properties and locations with better yield value in Midlands, UK, Provided insights on the potential earning power of holiday properties in West African and Asian countries during festive seasons.",
        pname: "LillyGreen, London",
        priority: "Mid",
        pbg: "secondary.main",
        budget: "PowerBi, Excel, PowerPoint / Word, Python, Selenium, Azure Cosmos, Azure SQL, Databricks",
    },
    {
        id: "Aug, 2018",
        name: "Founder & Data Lead",
        post: "Streamlined the ordering process with a custom Google Scripts (Google Sheets) tracking tool and Jira Service Management to capture orders, schedule manufacturing and plan pop-up events; Integrated multiple sales channels, synced data between multiple data bases (using REST APi, Python and PowerAutomate) and built a continuous integration environment; Redesigned wordpress website using Javascript and PHP, as part of marketing campaign - resulting in 70% increase in orders from previous year; Developed robust core framework for data analytics which proved useful in driving engagement with development teams and discussions on CI/CD pipelines. <a href='/roledescription' > Read More </a>",
        pname: "Obi Bakes It, Nigeria and UK",
        priority: "Mid",
        pbg: "secondary.main",
        budget: "HTML, XML, Java, Python, REST APIs, Javascript, SQL, PowerBI, Jira, PHP, PowerAutomate, PowerApps",
    },
    {
        id: "Jan, 2017",
        name: "Data Analyst",
        post: "Co-ordinated day-to-day operations for shipment tracking including prood of delivery and air waybill key entry. Significantly improved real time tracking of shipments by 40% within 2 months of starting the role - I optmised the storage of data in SQL database and built a user-friendly UI for customers. I also presented a business case for the implementation of push notifications to the Senior Leadership team.",
        pname: "Tranex, Nigeria",
        priority: "Junior",
        pbg: "primary.main",
        budget: "SQL, Java, HTML, CSS",
    },
    {
        id: "Sept, 2014",
        name:  "Intern Business Analyst",
        post: "Presented edits of Business Plan and Analysis reports to Senior Leadership team. Actively participated in discussions and influenced investment decisions surrounding technology estate",
        pname: "iQube, Nigeria",
        priority: "Junior",
        pbg: "primary.main",
        budget: "Business Analytics, Excel, PowerPoint",
    },
];


const Career = () => {
    return (
        <DashboardCard title="Career">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    ID
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Role
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Company
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Level
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Skills
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {item.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            whiteSpace: 'pre-wrap',
                                            overflowWrap: 'break-word',
                                            flexDirection: "column", // Flex direction set to column
                                            alignItems: "flex-start", // Align items to the start
                                        }}
                                    >
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "13px",
                                            }}
                                        >
                                            {item.post}
                                        </Typography>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {item.pname}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: item.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={item.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right" sx={{

display: "flex",
whiteSpace: 'pre-wrap',
overflowWrap: 'break-word',
flexDirection: "column", // Flex direction set to column
alignItems: "flex-start", //
                                }}>
                                    <Typography variant="h7">{item.budget}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default Career;





