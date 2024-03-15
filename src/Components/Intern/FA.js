import React from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function FA() {
    useEffect (() => {
        document.title = "Finance Analysis internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 d-flex justify-content-center p-5'>
                    <Card className='w-75 '>
                        <Card.Body>
                            <Card.Title>Finance Analysis</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Modules</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                            <b>1.Financial Accounting:</b> Covers basic accounting principles, financial statements analysis, and accounting standards such as GAAP and IFRS.<br /> <br />
                                    <b>2.Managerial Accounting: </b>  Focuses on internal financial reporting, cost analysis, budgeting, and decision-making techniques for managerial decision support.<br /> <br />
                                    <b>3.Corporate Finance: </b>Introduces concepts such as capital budgeting, valuation methods, risk management, capital structure, and financial planning.<br /> <br />
                                    <b>4.Investments: </b>Teaches principles of investment analysis and portfolio management, including asset allocation, security valuation, and risk-return tradeoffs.<br /> <br />
                                    <b>5.Financial Modeling:</b> Provides skills in building financial models using spreadsheets, including forecasting, scenario analysis, and sensitivity testing.<br /> <br />
                                    <b>6.Data Analysis and Visualization: </b> Introduces tools and techniques for analyzing financial data, including statistical methods, regression analysis, and data visualization using software like Excel, Python, or R.<br /> <br />
                            </div>

                            <Card.Subtitle className="mb-2 text-muted">Roles and Responsibilities</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                <b>1.Financial Analyst Intern:</b> Assist in financial statement analysis, financial modeling, and valuation of companies or investment opportunities.<br /> <br />
                                    <b>2.Investment Analyst Intern: </b>Conduct research on companies, industries, and financial markets, and assist in making investment recommendations based on analysis<br /> <br />
                                    <b>3.Risk Management Intern: </b>Analyze and assess financial risks facing the organization, develop risk mitigation strategies, and monitor risk exposures.<br /> <br />
4.<b>Corporate Finance Intern: </b>Assist in financial planning and analysis, capital budgeting, and financial decision-making processes within the organization.<br /> <br />
5.	<b>Financial Reporting Intern: </b>Assist in preparing financial reports, disclosures, and regulatory filings, ensuring compliance with accounting standards and regulations.<br /> <br />
6.	<b>Data Analyst Intern: Analyze</b>financial data, perform trend analysis, and create visualizations to communicate insights and support decision-making.<br /> <br />
7.	<b>Quantitative Analyst Intern:</b>Develop and implement quantitative models and algorithms for analyzing financial data, pricing financial instruments, and managing risk.<br /> <br />
                                </Card.Text>
                            </div>
                            <Card.Subtitle className="mb-2 text-muted">Eligibility Criteria:</Card.Subtitle>
                            <div className='d-flex justify-content-center'>
                                <Card.Text className='w-75'>
                                    <b>1.Educational Background:</b>Typically, interns pursuing finance analysis roles have a background in finance, accounting, economics, mathematics, or a related field.<br /> <br />
                                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                                </Card.Text>
                            </div>
                            <Card.Link className='apply-link' target='_blank' style={{textDecoration:"none",fontSize:"1rem"}} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
}

export default FA