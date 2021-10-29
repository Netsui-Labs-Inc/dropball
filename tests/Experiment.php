<?php


namespace Tests;


class Experiment extends TestCase
{

    public function test_experiment_debug()
    {
        $dump = $this->get('test')->dump();
    }
}
