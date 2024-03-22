<?php

if (!function_exists('redirectWithSuccess')) {
    function redirectWithSuccess($route, $message)
    {
        return redirect()->route($route)->with('success', $message);
    }
}



if (!function_exists('redirectWithError')) {
    function redirectWithError($message)

    {
        return redirect()->back()->with('error', $message);
    }
}
