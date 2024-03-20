import React from 'react'
import { useEffect } from 'react';
import './Interns.css'
import wbI from '../../Assets/fa4.jpg'
import RR from '../../Assets/bfa.jpg'
import EC from '../../Assets/rfa.jpg'

function FA() {
    useEffect(() => {
        document.title = "Finance Analysis internship program"
        window.scrollTo(0, 0)
    }, [])
    return <>
        <div className='container-fluid'>
            <div className='row intership-card'>
                <div className='col-md-12 fa-banner d-flex justify-content-center'>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-12 '>
                    <div className='h1 pt-5 text-center pb-5'>
                    Finance Analysis
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Modules
                    </div>
                    <div className='fa-contents ps-2 pb-4 pe-2'>
                    <b>1.Financial Accounting:</b> Covers basic accounting principles, financial statements analysis, and accounting standards such as GAAP and IFRS.<br /> <br />
                                    <b>2.Managerial Accounting: </b>  Focuses on internal financial reporting, cost analysis, budgeting, and decision-making techniques for managerial decision support.<br /> <br />
                                    <b>3.Corporate Finance: </b>Introduces concepts such as capital budgeting, valuation methods, risk management, capital structure, and financial planning.<br /> <br />
                                    <b>4.Investments: </b>Teaches principles of investment analysis and portfolio management, including asset allocation, security valuation, and risk-return tradeoffs.<br /> <br />
                                    <b>5.Financial Modeling:</b> Provides skills in building financial models using spreadsheets, including forecasting, scenario analysis, and sensitivity testing.<br /> <br />
                                    <b>6.Data Analysis and Visualization: </b> Introduces tools and techniques for analyzing financial data, including statistical methods, regression analysis, and data visualization using software like Excel, Python, or R.<br /> <br />
                            </div>
                </div>
                <div className='col-md-4'>
                    <img src={wbI} className='w-100' alt="fa-developer" />
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-4'>
                    <img src={RR} className='w-100' alt="fa-developer" />
                </div>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Roles and Responsibilities
                    </div>
                    <div className='fa-contents ps-2 pb-4 pe-2'>
                    <b>1.Financial Analyst Intern:</b> Assist in financial statement analysis, financial modeling, and valuation of companies or investment opportunities.<br /> <br />
                                    <b>2.Investment Analyst Intern: </b>Conduct research on companies, industries, and financial markets, and assist in making investment recommendations based on analysis<br /> <br />
                                    <b>3.Risk Management Intern: </b>Analyze and assess financial risks facing the organization, develop risk mitigation strategies, and monitor risk exposures.<br /> <br />
4.<b>Corporate Finance Intern: </b>Assist in financial planning and analysis, capital budgeting, and financial decision-making processes within the organization.<br /> <br />
5.	<b>Financial Reporting Intern: </b>Assist in preparing financial reports, disclosures, and regulatory filings, ensuring compliance with accounting standards and regulations.<br /> <br />
6.	<b>Data Analyst Intern: Analyze</b>financial data, perform trend analysis, and create visualizations to communicate insights and support decision-making.<br /> <br />
7.	<b>Quantitative Analyst Intern:</b>Develop and implement quantitative models and algorithms for analyzing financial data, pricing financial instruments, and managing risk.<br /> <br />
                    </div>
                </div>
            </div>
            <div className='row pt-2 pb-2'>
                <div className='col-md-8'>
                    <div className='h2 pt-3 pb-3'>
                        Eligibility Criteria
                    </div>
                    <div className='fa-contents ps-2 pb-4 pe-2'>
                    <b>1.Educational Background:</b>Typically, interns pursuing finance analysis roles have a background in finance, accounting, economics, mathematics, or a related field.<br /> <br />
                                    <b>2.Must Complete:</b> You have must completed HSC.<br /> <br />
                    </div>
                    <div className='text-center'>
                        <a className='apply-link' target='_blank' style={{ textDecoration: "none", fontSize: "2rem",fontWeight:"500" }} href="https://forms.gle/TqrjJLCvM5uzCTmc7">Apply</a>
                    </div>
                </div>
                <div className='col-md-4'>
                    <img src={EC} style={{borderRadius:"10px"}} className='w-100' alt="fa-developer" />
                </div>
            </div>
        </div>
    </>
}

export default FA