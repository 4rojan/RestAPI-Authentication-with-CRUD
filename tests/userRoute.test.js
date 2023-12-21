"use strict";

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Modify the path as needed to point to your server.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Routes', () => {
  let recordUuid;

  // it('should create a new record', (done) => {
  //   chai
  //     .request(app)
  //     .post('/api/create_record')
  //     .send({
  //       // Provide valid data for creating a record
  //       Name: 'Adam',
  //       Email: 'adam11@gmail.com',
  //       Phone_Number: '9876225673',
  //     })
  //     .end((err, res) => {
  //       expect(res).to.have.status(201); // Adjust status code as per your implementation
  //       expect(res.body).to.have.property('uuid');
  //       recordUuid = res.body.uuid;
  //       done();
  //     });
  // });

  it('should retrieve all records', (done) => {
    chai
      .request(app)
      .get('/api/get_all_records')
      .end((err, res) => {
        expect(res).to.have.status(200); // Adjust status code as per your implementation
        expect(res.body).to.be.an('object'); //In Object JSON Format 
        done();
      });
  });

  // it('should retrieve a single record by UUID', (done) => {
  //   chai
  //     .request(app)
  //     .get(`/api/get_Single_record/${recordUuid}`)
  //     .end((err, res) => {
  //       expect(res).to.have.status(200);
  //       expect(res.body).to.have.property('uuid', recordUuid);
  //       done();
  //     });
  // });

  // it('should update a record by UUID', (done) => {
  //   chai
  //     .request(app)
  //     .put(`/api/update_record/${recordUuid}`)
  //     .send({
  //       // Provide data for updating the record
  //       Name: 'Ravi',
  //       Email: 'ravi@gmail.com',
  //       Phone_Number: '9876543210',
  //     })
  //     .end((err, res) => {
  //       expect(res).to.have.status(200);
  //       expect(res.body).to.have.property('uuid', recordUuid);
  //       expect(res.body).to.have.property('Name', 'Ravi');
  //       done();
  //     });
  // });

  // it('should delete a record by UUID', (done) => {
  //   chai
  //     .request(app)
  //     .delete(`/api/delete_record/${recordUuid}`)
  //     .end((err, res) => {
  //       expect(res).to.have.status(200); // Adjust status code as per your implementation
  //       done();
  //     });
  // });
});

