import * as React from 'react';

export interface ISummaryProps {
}

const Summary: React.FunctionComponent<ISummaryProps> = (props) => {
    return (
        <div>
            <span>Resourceful Software Developer with comprehensive experience in developing robust code for high-volume business.
                Highly successful in automating various business process and reducing manual effort by 90%.
                Take pride in nurturing productive relationships with co-workers, superiors and client by consistently delivering quality results.
            </span>
            <ul>
                <li>Designing and developing, n - Tier Client/Server Web-based Applications using .NET Framework, SQL
Server, WCF and RESTful services with Agile and Waterfall Development Methodology.</li>
                <li>Excellent knowledge of ReactJS, JQuery, JavaScript, HTML, CSS, Bootstrap, XML, XSLT and XPATH.</li>
                <li>Developed data layer using Entity Framework, ADO.Net and LINQ (LINQ to Object, LINQ to SQL, LINQ to
XML, Lambda).</li>
                <li>Strong experience in Performance Tuning and Query Optimization.</li>
                <li>Highly experienced in developing Stored Procedures, Functions, Triggers, Views and Joins in SQL Server.</li>
                <li>Solid understanding of Object oriented programming and design patterns including Dependency Injection
(DI), Inversion of Control (IOC).</li>
                <li>Experience of working in the complete SDLC involving design, development, documentation, testing and
maintenance.</li>
                <li>Expertise with Source Code Control Systems GIT, Bit bucket and TFS (Team Foundation Server).</li>
                <li>Extensively used Jira for project management and bug tracking.</li>
                <li>Excellent analytical, problem solving, communication skills and an excellent team player.</li>
            </ul>
        </div>
    );
}


export default Summary;