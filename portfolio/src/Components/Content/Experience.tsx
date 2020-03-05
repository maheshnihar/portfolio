import * as React from 'react';

export interface IExperienceProps {
}

const Experience: React.FunctionComponent<IExperienceProps> = (props) => {
    return (
        <div>
            <div>
                <p style={{ fontWeight: 'bold' }}>Application Software Developer</p>
                <span>Code Ace Solutions Inc, South Plainfield NJ (January 2015 – Present)</span>
                <ul>
                    <li>Highly successful in improving the overall operational efficiency of business process by implementing
various performance related tweaks.</li>
                    <li>Successful in improving the large data processing applications runtime from weeks to couple of days.</li>
                    <li>Lead the team in successfully automating business process to reduce manual intervention.</li>
                    <li>Effectively utilized modern web frameworks to implement rich UI for business to monitor their day to day
processes.</li>
                    <li>Automated various health care processes resulting in reduction of manual effort by 95%.</li>
                    <li>Championed the successful implementation of medical letter automation using C#, ASP.NET and SQL
server for 13 states (line of business) in US.</li>
                    <li>Developed rich frontend UI for business users to process medical claims, denials, approvals and
complaints.</li>
                    <li>Built efficient security model on web applications to protect PHI data.</li>
                </ul>
            </div>
            <div>
                <p style={{ fontWeight: 'bold' }}>.NET Developer</p>
                <span>Tech Mahindra, Hyderabad India (May 2011 – July 2013)</span>
                <ul>
                    <li>Successful in coding complex workflows for General Electric gas and Oil project using .NET framework and
SQL server database.</li>
                    <li>Designed and coded a website in ASP.NET MVC for a school administration to streamline admission and
enrollment process.</li>
                    <li>Developed a C# ASP.NET Web application for local travel agency to manage bus bookings.</li>
                </ul>
            </div>
        </div>
    );
}


export default Experience;