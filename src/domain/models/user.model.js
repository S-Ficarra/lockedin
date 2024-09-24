export class User {

    _id;
    _name;
    _firstName;
    _email;
    _studentId;
    _nfcKey;
    _registrationDate;
    _role;

    constructor (id, name, firstName, email, studentId, nfcKey, registrationDate, role) {
        this._id = id,
        this._name = name,
        this._firstName = firstName,
        this._email = email,
        this._studentId = studentId,
        this._nfcKey = nfcKey,
        this._registrationDate = registrationDate,
        this._role = role
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getFirstName() {
        return this._firstName;
    }

    getEmail() {
        return this._email;
    }

    getStudentId() {
        return this._studentId;
    }

    getNfcKey() {
        return this._nfcKey;
    }

    getRegistrationDate() {
        return this._registrationDate;
    }

    getRole() {
        return this._role;
    }

    setId(value) {
        this._id = value;
    }

    setName(value) {
        this._name = value;
    }

    setFirstName(value) {
        this._firstName = value;
    }

    setEmail(value) {
        this._email = value;
    }

    setStudentId(value) {
        this._studentId = value;
    }

    setNfcKey(value) {
        this._nfcKey = value;
    }

    setRegistrationDate(value) {
        this._registrationDate = value;
    }

    setRole(value) {
        this._role = value;
    }


}