tbls=('department' 'job' 'job_application')
tbl_characteristics=('constraints' 'columns' 'constraints/referential')

tsc

for tbl in $tbls; do
  for tbc in $tbl_characteristics; do
    node dist/snap.js $tbc $tbl >cases.test/ddl/_intermediate/$tbc/$tbl.json
    # echo $tbl $tbc
  done
done
