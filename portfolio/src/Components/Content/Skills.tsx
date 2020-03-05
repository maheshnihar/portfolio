import * as React from 'react';
import './Skills.css';
export interface ISkillsProps {
}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
    return (
        <div className='parent'>
            <div>
                <p>Programming Languages</p>
                <span>C#, C++</span>
            </div>
            <div>
                <p>.NET Technologies</p>
                <span>ASP.NET, ASP.NET MVC, WebAPI, WCF, Entity Framework,LINQ, ADO.NET</span>
            </div>
            <div>
                <p>Web Technologies</p>
                <span>React JS, JavaScript, HTML, CSS,XML, JSON, XSLT, AJAX, JQuery,Bootstrap</span>
            </div>
            <div>
                <p>Database</p>
                <span>SQL Server 2005/2008/2014,PostgreSQL</span>
            </div>
            <div>
                <p>ETL</p>
                <span>SSIS, SAP businesswarehouse</span>
            </div>
            <div>
                <p>Unit Testing frameworks</p>
                <span>NUNIT, MSTEST</span>
            </div>
            <div>
                <p>Development IDE</p>
                <span>Visual Studio, Visual Code, SQL Management Studio</span>
            </div>
            <div>
                <p>Source Control</p>
                <span>GitHub, BitBucket, TFS</span>
            </div>
            <div>
                <p>Design Software</p>
                <span>Photoshop, Dreamweaver</span>
            </div>
        </div>
    );
}


export default Skills;