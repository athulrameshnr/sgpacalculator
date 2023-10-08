//first smemster
s1=[]
res1=[]
function first() {
    s1[0]=document.getElementById("s11001").value;
    s1[1]=document.getElementById("s11002").value;
    s1[2]=document.getElementById("s11003").value;
    s1[3]=document.getElementById("s11004").value;
    s1[4]=document.getElementById("s11005").value;
    s1[5]=document.getElementById("s11007").value;
    s1[6]=document.getElementById("s11008").value;
    s1[7]=document.getElementById("s11009").value;

    //english
    switch (s1[0]) {
        case 'S':
        res1[0]=10*4;
        break;
        case 'A':
        res1[0]=9*4;
        break;
        case 'B':
        res1[0]=8*4;
        break;
        case 'C':
        res1[0]=7*4;
        break;
        case 'D':
        res1[0]=6*4;
        break;
        case 'E':
        res1[0]=5*4;
        break;
    }
    //maths
    switch (s1[1]) {
        case 'S':
        res1[1]=10*5;
        break;
        case 'A':
        res1[1]=9*5;
        break;
        case 'B':
        res1[1]=8*5;
        break;
        case 'C':
        res1[1]=7*5;
        break;
        case 'D':
        res1[1]=6*5;
        break;
        case 'E':
        res1[1]=5*5;
        break;
    }
    //physics
    switch (s1[2]) {
        case 'S':
        res1[2]=10*3;
        break;
        case 'A':
        res1[2]=9*3;
        break;
        case 'B':
        res1[2]=8*3;
        break;
        case 'C':
        res1[2]=7*3;
        break;
        case 'D':
        res1[2]=6*3;
        break;
        case 'E':
        res1[2]=5*3;
        break;
    }

    //chemistry
    switch (s1[3]) {
        case 'S':
        res1[3]=10*3;
        break;
        case 'A':
        res1[3]=9*3;
        break;
        case 'B':
        res1[3]=8*3;
        break;
        case 'C':
        res1[3]=7*3;
        break;
        case 'D':
        res1[3]=6*3;
        break;
        case 'E':
        res1[3]=5*3;
        break;
    }

    //graphics
    switch (s1[4]) {
        case 'S':
        res1[4]=10*1.5;
        break;
        case 'A':
        res1[4]=9*1.5;
        break;
        case 'B':
        res1[4]=8*1.5;
        break;
        case 'C':
        res1[4]=7*1.5;
        break;
        case 'D':
        res1[4]=6*1.5;
        break;
        case 'E':
        res1[4]=5*1.5;
        break;
    }
    //chemistry lab
    switch (s1[5]) {
        case 'S':
        res1[5]=10;
        break;
        case 'A':
        res1[5]=9;
        break;
        case 'B':
        res1[5]=8;
        break;
        case 'C':
        res1[5]=7;
        break;
        case 'D':
        res1[5]=6;
        break;
        case 'E':
        res1[5]=5;
        break;
    }

    //IT
    switch (s1[6]) {
        case 'S':
        res1[6]=10*2;
        break;
        case 'A':
        res1[6]=9*2;
        break;
        case 'B':
        res1[6]=8*2;
        break;
        case 'C':
        res1[6]=7*2;
        break;
        case 'D':
        res1[6]=6*2;
        break;
        case 'E':
        res1[6]=5*2;
        break;
    }

    //yoga
    switch (s1[7]) {
        case 'S':
        res1[7]=10;
        break;
        case 'A':
        res1[7]=9;
        break;
        case 'B':
        res1[7]=8;
        break;
        case 'C':
        res1[7]=7;
        break;
        case 'D':
        res1[7]=6;
        break;
        case 'E':
        res1[7]=5;
        break;
    }
    var sum=0;
    var i=0;
    while (i<=7) {
        sum=sum+res1[i];
        i++;
    }
    var sgpa1=sum/20.5;
    document.getElementById("result1").innerHTML=sgpa1;
}


//second semester
/*s2=[]
res2=[]
function first() {
    s2[0]=document.getElementById("s11001").value;
    s2[1]=document.getElementById("s11002").value;
    s2[2]=document.getElementById("s11003").value;
    s2[3]=document.getElementById("s11004").value;
    s2[4]=document.getElementById("s11005").value;
    s2[5]=document.getElementById("s11007").value;
    s2[6]=document.getElementById("s11008").value;
    s2[7]=document.getElementById("s11009").value;

    //english
    switch (s2[0]) {
        case 'S':
        res2[0]=10*4;
        break;
        case 'A':
        res2[0]=9*4;
        break;
        case 'B':
        res2[0]=8*4;
        break;
        case 'C':
        res2[0]=7*4;
        break;
        case 'D':
        res2[0]=6*4;
        break;
        case 'E':
        res2[0]=5*4;
        break;
    }
    //maths
    switch (s1[1]) {
        case 'S':
        res1[1]=10*5;
        break;
        case 'A':
        res1[1]=9*5;
        break;
        case 'B':
        res1[1]=8*5;
        break;
        case 'C':
        res1[1]=7*5;
        break;
        case 'D':
        res1[1]=6*5;
        break;
        case 'E':
        res1[1]=5*5;
        break;
    }
    //physics
    switch (s1[2]) {
        case 'S':
        res1[2]=10*3;
        break;
        case 'A':
        res1[2]=9*3;
        break;
        case 'B':
        res1[2]=8*3;
        break;
        case 'C':
        res1[2]=7*3;
        break;
        case 'D':
        res1[2]=6*3;
        break;
        case 'E':
        res1[2]=5*3;
        break;
    }

    //chemistry
    switch (s1[3]) {
        case 'S':
        res1[3]=10*3;
        break;
        case 'A':
        res1[3]=9*3;
        break;
        case 'B':
        res1[3]=8*3;
        break;
        case 'C':
        res1[3]=7*3;
        break;
        case 'D':
        res1[3]=6*3;
        break;
        case 'E':
        res1[3]=5*3;
        break;
    }

    //graphics
    switch (s1[4]) {
        case 'S':
        res1[4]=10*1.5;
        break;
        case 'A':
        res1[4]=9*1.5;
        break;
        case 'B':
        res1[4]=8*1.5;
        break;
        case 'C':
        res1[4]=7*1.5;
        break;
        case 'D':
        res1[4]=6*1.5;
        break;
        case 'E':
        res1[4]=5*1.5;
        break;
    }
    //chemistry lab
    switch (s1[5]) {
        case 'S':
        res1[5]=10;
        break;
        case 'A':
        res1[5]=9;
        break;
        case 'B':
        res1[5]=8;
        break;
        case 'C':
        res1[5]=7;
        break;
        case 'D':
        res1[5]=6;
        break;
        case 'E':
        res1[5]=5;
        break;
    }

    //IT
    switch (s1[6]) {
        case 'S':
        res1[6]=10*2;
        break;
        case 'A':
        res1[6]=9*2;
        break;
        case 'B':
        res1[6]=8*2;
        break;
        case 'C':
        res1[6]=7*2;
        break;
        case 'D':
        res1[6]=6*2;
        break;
        case 'E':
        res1[6]=5*2;
        break;
    }

    //yoga
    switch (s1[7]) {
        case 'S':
        res1[7]=10;
        break;
        case 'A':
        res1[7]=9;
        break;
        case 'B':
        res1[7]=8;
        break;
        case 'C':
        res1[7]=7;
        break;
        case 'D':
        res1[7]=6;
        break;
        case 'E':
        res1[7]=5;
        break;
    }
    var sum=0;
    var i=0;
    while (i<=7) {
        sum=sum+res1[i];
        i++;
    }
    var sgpa1=sum/20.5;
    console.log(sgpa1);
    document.getElementById("res").innerHTML=sgpa1;
}*/