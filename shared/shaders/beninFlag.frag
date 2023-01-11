#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec4 beninFlag();

void main() {
	gl_FragColor = beninFlag();
}

vec4 beninFlag(){
	vec2 st = gl_FragCoord.xy/u_resolution;
    vec4 col;
    
    if(st.x < .5)
        col = vec4(0., .6, 0., 1.);
    else if (st.y < .5)
        col = vec4(1., 0., 0., 1.);
	else
        col = vec4(1., 1., 0., 1.);

    return col;
}