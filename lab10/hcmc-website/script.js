'use strict'

const btnRegisterPatient = document.getElementById('btnRegisterPatient')
const tableBody = document.getElementById('tbodyPatientsList')
const showOutPatients = document.getElementById('chkShowOutPatients')
const showElderlyPatients = document.getElementById('chkElderlyPatients')

btnRegisterPatient.addEventListener('click', function (event) {
  const myForm = document.getElementsByTagName('form')[1]

  if (!myForm.checkValidity()) {
    return
  }
  event.preventDefault()

  const patientIdNumber = document.getElementById('patientIdNumber').value
  const firstName = document.getElementById('firstName').value
  const middleInitials = document.getElementById('middleInitials').value
  const lastName = document.getElementById('lastName').value
  const dateOfBirth = document.getElementById('dateOfBirth').value
  const ddlDepartment = document.getElementById('ddlDepartment').value
  const radioIsOutPatientYes = document.getElementById('radioIsOutPatientYes')
  const radioIsOutPatientNo = document.getElementById('radioIsOutPatientNo')

  const isOutPatient = radioIsOutPatientYes.checked
    ? 'Yes'
    : radioIsOutPatientNo.checked
    ? 'No'
    : ''

  const newRow = tableBody.insertRow()
  const cellValues = [
    patientIdNumber,
    firstName,
    middleInitials,
    lastName,
    dateOfBirth,
    ddlDepartment,
    isOutPatient,
  ]

  for (let i = 0; i < cellValues.length; i++) {
    const cell = newRow.insertCell(i)
    cell.textContent = cellValues[i]
  }

  // Reset form fields
  const inputFields = [
    'patientIdNumber',
    'firstName',
    'middleInitials',
    'lastName',
    'dateOfBirth',
    'ddlDepartment',
    'radioIsOutPatientYes',
    'radioIsOutPatientNo',
  ]

  inputFields.forEach((fieldName) => {
    if (fieldName.includes('radioIsOutPatient')) {
      document.getElementById(fieldName).checked = false
    } else {
      document.getElementById(fieldName).value = ''
    }
  })
})

showOutPatients.addEventListener('change', outPatientFilter)
showElderlyPatients.addEventListener('change', elderlyPatientFilter)

function outPatientFilter() {
  const showYes = showOutPatients.checked
  const rows = tableBody.getElementsByTagName('tr')

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    const isOutpatientCell = row.getElementsByTagName('td')[6].textContent

    if (showYes && isOutpatientCell === 'No') {
      row.classList.add('d-none')
    } else {
      row.classList.remove('d-none')
    }
  }
}

function elderlyPatientFilter() {
  const isChecked = showElderlyPatients.checked
  const rows = tableBody.getElementsByTagName('tr')

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    const dob = row.getElementsByTagName('td')[4].textContent
    const age = calculateAge(dob)

    if (isChecked && age < 65) {
      row.classList.add('d-none')
    } else {
      row.classList.remove('d-none')
    }
  }
}

function calculateAge(dob) {
  const dobDate = new Date(dob)
  const today = new Date()
  const age = today.getFullYear() - dobDate.getFullYear()
  return age
}
