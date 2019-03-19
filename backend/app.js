// importar
var express = require('express');
var http = require('http');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var requestG = require('request');
var cookieParser = require('cookie-parser');

// instanciar
var app = express();
// para datos en mensaje
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cookieParser());

// ruteo

app.get('/lee3', function(req, res) {

    try {
        if (req.query.esMoral == undefined || req.query.esMoral == 'undefined') {
            var data = querystring.stringify({
                __EVENTTARGET: "ddlMunicipios",
                __EVENTARGUMENT: '',
                __LASTFOCUS: "",
                __VIEWSTATE: "/wEPDwULLTE3Mjg0NTQwMDEPZBYCAgMPZBYEAgEPEGRkFgECX2QCAw8QDxYGHg1EYXRhVGV4dEZpZWxkBQlsb2NhbGlkYWQeDkRhdGFWYWx1ZUZpZWxkBQhsb2NsXzAzMB4LXyFEYXRhQm91bmRnZBAVAxkyLTUwMS1DUkVTQ0VOQ0lPIE1PUkFMRVMgFDMtNTAxLUxPQ0FMSURBRCBUUkVTDzEtNTAxLVpJVEFDVUFSTxUDATIBMwExFCsDA2dnZ2RkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBQpjaGtQZXJzb25hBZ6AUIBgJjX3U0nx4iN3jvXZIXw=",
                __VIEWSTATEGENERATOR: "18C6EB94",
                __EVENTVALIDATION: "/wEWbQKCvIDzCQK/56a+BgL2vfS2CwKs/cnZCwLtsffZBwKc2/v2AgKQvu6IAgLo4sPKDAL1md+hDgKg+MSHDALfqZusDQLcypScAgKUkdClDQLQuYyLBQLI6a3PDgLQ44bXBAKarsmLAwLK3OKqAgKkyKC2BwLvr47WCgKI36WIAwKm+eP1CQKf9t3OBgLkh4XVDgKu5OSODwLO3IKpBgKL1oDKBALy0dGpCwLW7+DTAgKcpJ39DAK/5aHXAQLL4efgBAKNrJHbDwLI8YWMDQKDyeroAgKt7I6QAQLW5aG3AwLQl7pTAtvB14AIAuC0reIDAvH/y+4EAqT38qQHAojvw7UDArSCwcwEAvOFydgOAr3WxN0NAv7U66IKAt7CsMgJAqOG+bIJAp/c7l8CwI6SpgICo9Gkmw4Cw6XP1gkClaWv3gsCuOGRgQEC7NjvkQQCzYaxrwIC6+ngrAYC2r2zhgMCnaeqzw4Ch5+OtAIC5uKBsQYC7Yb8mgwCm87U8QIC8fCkpAwC64WQyggCo6S53g0CkOml9gYCvJuauw8C7NfJoQ0Cxtyxrw8CrMaK0AsC6Mmg9QYC48yXpQUCm4H/yQICmO6lpgwC/4fcoQoC8e3o0Q0CoY7A6woC/Kaxiw4CgfXWuAICosrk9A8C6tOP6gsCxuD5xwcCztufuwwCrtbZyQkCvv+izgQC87PosgcCl8XnsQYCtv+b1goCr/WQxgQCi5Gi0woCnp2qzAUCzvSqoQECqd+V5gMC1dvFiwYCuZ3w3w4C1duDmAsC98X5FwK0x4qMAwKR9uHFBAKS9uHFBAKQ9uHFBAK5i7SSBwK4i7SSBwKOqd3sBgL6irOJBgL35q7TCgKVq8qQCUyd1zqyn2Nwa3DEueOnA2Il83mb",
                ddlMunicipios: "dbsacpi_zitacuaro",
                ddlLocalidades: req.query.ddlLocalidades,
                ddlTipo: req.query.ddlTipo,
                txtCuenta: req.query.txtCuenta,
                txtApellido: req.query.txtApellido,
                btnConsulta: "Consultar"
            });
        } else {
            var data = querystring.stringify({
                __EVENTTARGET: "ddlMunicipios",
                __EVENTARGUMENT: '',
                __LASTFOCUS: "",
                __VIEWSTATE: "/wEPDwULLTE3Mjg0NTQwMDEPZBYCAgMPZBYEAgEPEGRkFgECX2QCAw8QDxYGHg1EYXRhVGV4dEZpZWxkBQlsb2NhbGlkYWQeDkRhdGFWYWx1ZUZpZWxkBQhsb2NsXzAzMB4LXyFEYXRhQm91bmRnZBAVAxkyLTUwMS1DUkVTQ0VOQ0lPIE1PUkFMRVMgFDMtNTAxLUxPQ0FMSURBRCBUUkVTDzEtNTAxLVpJVEFDVUFSTxUDATIBMwExFCsDA2dnZ2RkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBQpjaGtQZXJzb25hBZ6AUIBgJjX3U0nx4iN3jvXZIXw=",
                __VIEWSTATEGENERATOR: "18C6EB94",
                __EVENTVALIDATION: "/wEWbQKCvIDzCQK/56a+BgL2vfS2CwKs/cnZCwLtsffZBwKc2/v2AgKQvu6IAgLo4sPKDAL1md+hDgKg+MSHDALfqZusDQLcypScAgKUkdClDQLQuYyLBQLI6a3PDgLQ44bXBAKarsmLAwLK3OKqAgKkyKC2BwLvr47WCgKI36WIAwKm+eP1CQKf9t3OBgLkh4XVDgKu5OSODwLO3IKpBgKL1oDKBALy0dGpCwLW7+DTAgKcpJ39DAK/5aHXAQLL4efgBAKNrJHbDwLI8YWMDQKDyeroAgKt7I6QAQLW5aG3AwLQl7pTAtvB14AIAuC0reIDAvH/y+4EAqT38qQHAojvw7UDArSCwcwEAvOFydgOAr3WxN0NAv7U66IKAt7CsMgJAqOG+bIJAp/c7l8CwI6SpgICo9Gkmw4Cw6XP1gkClaWv3gsCuOGRgQEC7NjvkQQCzYaxrwIC6+ngrAYC2r2zhgMCnaeqzw4Ch5+OtAIC5uKBsQYC7Yb8mgwCm87U8QIC8fCkpAwC64WQyggCo6S53g0CkOml9gYCvJuauw8C7NfJoQ0Cxtyxrw8CrMaK0AsC6Mmg9QYC48yXpQUCm4H/yQICmO6lpgwC/4fcoQoC8e3o0Q0CoY7A6woC/Kaxiw4CgfXWuAICosrk9A8C6tOP6gsCxuD5xwcCztufuwwCrtbZyQkCvv+izgQC87PosgcCl8XnsQYCtv+b1goCr/WQxgQCi5Gi0woCnp2qzAUCzvSqoQECqd+V5gMC1dvFiwYCuZ3w3w4C1duDmAsC98X5FwK0x4qMAwKR9uHFBAKS9uHFBAKQ9uHFBAK5i7SSBwK4i7SSBwKOqd3sBgL6irOJBgL35q7TCgKVq8qQCUyd1zqyn2Nwa3DEueOnA2Il83mb",
                ddlMunicipios: "dbsacpi_zitacuaro",
                ddlLocalidades: req.query.ddlLocalidades,
                ddlTipo: req.query.ddlTipo,
                txtCuenta: req.query.txtCuenta,
                txtApellido: req.query.txtApellido,
                btnConsulta: "Consultar",
                chkPersona: on
            });
            console.log("moral");
        }

        var MsgError = '';

        if (req.query.ddlLocalidades == undefined || req.query.ddlLocalidades == 'undefined') {
            MsgError = MsgError + ' La localidad es obligatoria.\n';
        }
        if (req.query.ddlTipo == undefined || req.query.ddlTipo == 'undefined') {
            MsgError = MsgError + ' El tipo es obligatorio.\n';
        }
        if (req.query.txtCuenta == undefined || req.query.txtCuenta == 'undefined') {
            MsgError = MsgError + ' La cuenta es obligatoria.\n';
        }
        if (req.query.txtApellido == undefined || req.query.txtApellido == 'undefined') {
            MsgError = MsgError + ' El apellido es obligatorio.\n';
        }

        if (MsgError != '') {
            salConError(res, 'Validaciones', MsgError);
        } else {

            var options = {
                host: 'sacpi.michoacan.gob.mx',
                port: 80,
                path: '/frm_cpredial.aspx',
                method: 'POST',
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate',
                    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
                    'Cache-Control': 'max-age=0',
                    'Connection': 'keep-alive',
                    'Content-Length': Buffer.byteLength(data),
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Origin': 'null',
                    'Upgrade-Insecure-Requests': '1',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36'
                }
            };

            var req = http.request(options, function(resp) {
                var dataR = '';
                var headers = resp.headers;
                resp.setEncoding('utf8');
                resp.on('data', function(chunk) {
                    dataR += chunk;
                }).on('end', function() {
                    try {
                        if (dataR.split('alert(\'') != null && dataR.split('alert(\'').length > 1) {
                            var err = dataR.split('alert(\'')[1];
                            err = err.split('\'')[0];
                            salConError(res, 'Error predial', err);
                        } else {
                            TraeBoleta(res, dataR, headers);
                        }
                    } catch (error) {
                        salConError(res, 'Error de cadena', 'La respuesta de sacpi tiene un formato inesperado.');
                    }
                });
            });
            req.write(data);
            req.end();
        }
    } catch (err) {
        salConError(res, 'Error servicio 1', JSON.stringify(err));
    }

});


function TraeBoleta(res, Datos, headers) {

    try {
        var cookie = JSON.stringify(headers);
        cookie = cookie.split('["')[1];
        cookie = cookie.split('"]')[0];

        while (Datos.includes("+")) {
            Datos = Datos.replace('+', ' ');
        }

        var datSplit = Datos.split('%3d');
        var apat = datSplit[1].split('%26')[0];
        var amat = datSplit[2].split('%26')[0];
        var nomb = datSplit[3].split('%26')[0];
        var ubic = datSplit[4].split('%26')[0];
        var loca = datSplit[5].split('%26')[0];
        var ofna = datSplit[6].split('%26')[0];
        var tpre = datSplit[7].split('%26')[0];
        var nreg = datSplit[8].split('%26')[0];
        var cpre = datSplit[9].split('">')[0];

        var dataPrint = '';
        dataPrint += 'apat: ' + apat + '\n';
        dataPrint += 'amat: ' + amat + '\n';
        dataPrint += 'nomb: ' + nomb + '\n';
        dataPrint += 'ubic: ' + ubic + '\n';
        dataPrint += 'loca: ' + loca + '\n';
        dataPrint += 'ofna: ' + ofna + '\n';
        dataPrint += 'tpre: ' + tpre + '\n';
        dataPrint += 'nreg: ' + nreg + '\n';
        dataPrint += 'cpre: ' + cpre + '\n';

        var data = querystring.stringify({
            apat: apat,
            amat: amat,
            nomb: nomb,
            ubic: ubic,
            loca: loca,
            ofna: ofna,
            tpre: tpre,
            nreg: nreg,
            cpre: cpre
        });

        var dataRegFin = {
            apat: apat,
            amat: amat,
            nomb: nomb,
            ubic: ubic,
            loca: loca,
            ofna: ofna,
            tpre: tpre,
            nreg: nreg,
            cpre: cpre,
            total: 0
        };


        //   console.log(data);
        var options = {
            host: 'sacpi.michoacan.gob.mx',
            port: 80,
            path: '/wfrm_Imprime_Recibos.aspx?' + data,
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Host': 'sacpi.michoacan.gob.mx',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
                'Cookie': cookie
            }
        };

        var req = http.request(options, function(resp) {
            var dataR = '';
            resp.setEncoding('utf8');
            resp.on('data', function(chunk) {
                dataR += chunk;

            }).on('end', function() {
                dataRegFin.total = dataR.split('txtTotal')[1];
                if (dataRegFin.total.split('value="').length > 1) {
                    dataRegFin.total = dataRegFin.total.split('value="')[1];
                    dataRegFin.total = dataRegFin.total.split('"')[0];
                    res.contentType('application/json');
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

                    res.send(dataRegFin);
                } else {
                    salConError(res, 'Pagado!!', '! Este predio no tiene adeudos registrados  ... ¡');
                }
            });
        });


        req.end();
    } catch (err) {
        console.log(err);
    }
}
// });

function salConError(res, titulo, mensaje) {
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send({ err: true, titErr: titulo, msgErr: mensaje });
}
// escuchar
app.listen(1000);
console.log("Servidor en el puerto: 1000");