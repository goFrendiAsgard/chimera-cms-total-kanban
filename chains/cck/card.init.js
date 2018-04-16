module.exports = (ins, vars, callback) => {
  let cckState = ins[0]
  let includePath = cckState.viewPath + 'total-kanban/cck/default.show/'
  cckState.schema.include.showViewPresentationTemplate = includePath + 'presentationTemplate.ejs'
  cckState.schema.include.showViewRowTemplate = includePath + 'rowTemplate.ejs'
  callback(null, cckState)
}
